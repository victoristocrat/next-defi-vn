import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import AppFooter from "../components/AppFooter/AppFooter";
import DevsList from "../components/ForHire/DevsList";

export default function Hiring(props) {
  const { t } = useTranslation("help");
  return (
    <>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/hiring" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button"
                >
                  🇬🇧
                </p>
              </a>
            </Link>
            <Link href="/hiring" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button"
                >
                  🇻🇳
                </p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <UpButton />
          <DevsList />
          <br />
          <hr />
          <AppFooter />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "help"])),
      // Will be passed to the page component as props
    },
  };
}
