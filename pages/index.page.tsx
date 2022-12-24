import { FC, useEffect } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import axios from "axios";
import { logger } from "../logs";
import { Nav } from "../components/layouts";
import { Profile, TProfile } from "../components/features";

export const HomePage: FC<TProfile> = ({ user, content }) => {
  useEffect(() => {
    logger.track("opened-home-page");
  }, []);

  return (
    <>
      <Head>
        <title>Avalynn: Front-end Developer</title>
        <meta
          name="description"
          content="I work providing semantic and accessible HTML, scalable CSS and JavaScript following good development practices."
        />
        <meta
          name="keywords"
          content="Discord Bot, Developer, Designer, UX, Front-end"
        />
        <meta property="og:title" content="Avalynn: Front-end Developer" />
        <meta
          property="og:description"
          content="I work providing semantic and accessible HTML, scalable CSS and JavaScript following good development practices."
        />
        <meta property="og:image" content="/og.png" />
      </Head>

      <Nav />
      <Profile user={user} content={content} />
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const userUrl = "https://api.github.com/users/avalynndev";
  const contentUrl =
    "https://raw.githubusercontent.com/avalynndev/avalynndev/main/website/README.md";

  const user = await axios
    .get(userUrl)
    .then(({ data }) => ({ user: data as unknown }))
    .catch((error) => ({ error: error as unknown }));

  const content = await axios
    .get(contentUrl)
    .then(({ data }) => ({ content: data as unknown }))
    .catch((error) => ({ error: error as unknown }));

  return {
    props: {
      ...user,
      ...content,
    },
    revalidate: 10080, // one week
  };
};
