import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import InfiniteScroll from "react-infinite-scroll-component";

interface News {
  // id: string;
  // userId: string;
  username: string;
  avatar: string;
  // shopName: string;
  // shopId: string;
  images: string[];
  comments: number;
  // date: string;
  text: string;
  likes: number;
  // didLike: boolean;
  // premium: boolean;
}

function App() {
  const [news, setNews] = useState<News[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchUsers = async () => {
    const response = await fetch("https://dev.tedooo.com/hw/feed.json");
    const res = await response.json();
    setNews(res.data);
  };

  const fetchMoreData = () => {
    // Make an API call or update state to get more data
    // In this example, we're just adding more items to the array
    setNews([...news]);
    // Set hasMore to false when there's no more data to fetch
    setHasMore(news.length < 15);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(news);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="posts">
          <InfiniteScroll
            style={{ overflowY: "hidden" }}
            dataLength={news.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4 className="text-center py-3">Loading...</h4>}
            endMessage={<h4>No more items to load</h4>}
          >
            {news.map((item, index) => (
              <Card
                key={index}
                username={item.username}
                avatar={item.avatar}
                text={item.text}
                images={item.images}
                likes={item.likes}
                comments={item.comments}
              />
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

export default App;
