import Head from "next/head";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import BotComponentList from "../components/BotComponentList/BotComponentList";
import axios from "axios";

export default function Signals(props) {
  const { t } = useTranslation("common");

  function RefreshButton() {
    return (
      <button
        onClick={() => {
          window.location.reload();
          window.alert("Refreshed");
        }}
        style={{
          position: "fixed",
          fontSize: "14px",
          bottom: "70px",
          right: "40px",
          paddingTop: "5px",
          paddingBottom: "5px",
          borderRadius: "6px",
          textAlign: "center",
          WebkitAppearance: "none",
          border: "1px solid var(--color-border-default)",
        }}
      >
        🔄 Refresh
      </button>
    );
  }

  return (
    <>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("s2t4")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/signals" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p
                  style={{
                    backgroundColor: "#ebebeb",
                    margin: "5px 5px 5px 0px",
                    padding: "5px 5px 5px 5px",
                    WebkitAppearance: "none",
                    borderRadius: "6px",
                    border: "2px solid var(--color-border-default)",
                    fontSize: "20px",
                    color: "var(--color-fg-default)",
                  }}
                >
                  🇬🇧
                </p>
              </a>
            </Link>
            <Link href="/signals" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p
                  style={{
                    backgroundColor: "#ebebeb",
                    margin: "5px 5px 5px 0px",
                    padding: "5px 5px 5px 5px",
                    WebkitAppearance: "none",
                    borderRadius: "6px",
                    border: "2px solid var(--color-border-default)",
                    fontSize: "20px",
                    color: "var(--color-fg-default)",
                  }}
                >
                  🇻🇳
                </p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <BotComponentList data={props.data} />
          <UpButton />
          <RefreshButton />
          <br />
          <hr />
          <h3>
            {t("footer")}
            <a href="https://t.me/victoristocrat">@victoristocrat</a>
          </h3>
        </div>
      </div>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await axios.get("https://api3.pyhash.com/signal/all");
  // Pass data to the page via props
  return {
    props: {
      data: res.data,
      ...(await serverSideTranslations(context.locale, ["common", "signals"])),
    },
  };
}