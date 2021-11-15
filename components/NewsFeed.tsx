import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { prettyDate } from "../lib/dates";

const FEED_CONFIG = [
  {
    title: "Ars Technica",
    uri: "http://feeds.arstechnica.com/arstechnica/index",
  },
  {
    title: "The Verge",
    uri: "https://www.theverge.com/rss/index.xml",
  },
];

const RSS_FEED_URL = "https://archit.xyz/rss/feed?url=";

export default function NewsFeed() {
  const [feedItem, setFeedItem] = React.useState({
    title: null,
    authorName: null,
    publishedDate: new Date().toISOString(),
    feedName: null,
  });

  const refreshFeed = () => {
    // Pick random feed
    const randomFeed =
      FEED_CONFIG[Math.floor(Math.random() * FEED_CONFIG.length)];

    // NewsFeed refresh logic
    fetch(`${RSS_FEED_URL}${randomFeed.uri}`)
      .then((response) => response.json())
      .then((json) => {
        const articles = json.items;
        const randomArticle =
          articles[Math.floor(Math.random() * articles.length)];

        setFeedItem({
          title: randomArticle.title,
          authorName: randomArticle.author.name,
          publishedDate: randomArticle.published,
          feedName: randomFeed.title,
        });

        console.log(`Setting feedItem title=${randomArticle?.title}`);

        return;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (feedItem?.title === null) {
      refreshFeed();
    }

    setTimeout(() => {
      refreshFeed();
    }, 30 * 1000);
  }, []);

  const SafePrettyDate = (d: any) => {
    try {
      const date = new Date(d);
      return ` - ${prettyDate(date)}`;
    } catch (error) {
      return "";
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#fff",
          fontSize: 25,
          fontFamily: "Inter_700Bold",
        }}
      >
        News Feed
      </Text>
      <Text
        style={{
          color: "#fff",
          fontSize: 30,
          paddingTop: 20,
          paddingBottom: 20,
          fontFamily: "Inter_500Medium",
        }}
      >
        {feedItem?.title}
      </Text>
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          fontFamily: "Inter_400Regular",
        }}
      >
        {feedItem?.feedName}
        {SafePrettyDate(feedItem?.publishedDate)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 20,
    justifyContent: "center",
  },
});
