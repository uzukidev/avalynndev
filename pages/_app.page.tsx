import "../styles/base/_tokens.scss";
import "../styles/base/_theme.scss";
import "../styles/base/_reset.scss";
import "../styles/base/_utils.scss";
import { AppProps } from "next/app";
import { Theme } from "../components/layouts";

const ProfileApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
};

export default ProfileApp;
