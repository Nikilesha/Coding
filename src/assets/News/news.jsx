import { useState, useEffect } from "react";

const API_KEY = "cvlotbhr01qj3umennngcvlotbhr01qj3umenno0"; // Replace with your Finnhub API key
const categories = ["general", "forex", "crypto", "merger", "earning"];

const StockMarketApp = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  const fetchNews = async (category) => {
    const url = `https://finnhub.io/api/v1/news?category=${category}&token=${API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const filterNews = (newCategory) => {
    setCategory(newCategory);
  };

  const filteredNews = news.filter((article) =>
    article.headline.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main">
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <img src="./tradeplus-logo.jpg" alt="T" />
            <span>Trade Plus</span>
          </div>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Stocks</a></li>
            <li><a href="#">Mutual Funds</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </nav>
      </div>

      <div className="dashboard">
        <div className="navbar">
          <input 
            type="text" 
            placeholder="Search for stock market..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="user-profile">
            <div className="profile"></div>
            <div className="name">Nikilesha</div>
          </div>
        </div>

        <div className="dash">
          <div className="container">
            <h1>Market News</h1>
            <p>Stay updated with the latest market news and analysis</p>
            <div className="filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={category === cat ? "active" : ""}
                  onClick={() => filterNews(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
            <div className="news-container">
              {filteredNews.map((article, index) => (
                <div key={index} className="news-item">
                  <img src={article.image || "https://via.placeholder.com/300"} alt={category} />
                  <div className="news-content">
                    <p className="category">{category}</p>
                    <h2>{article.headline}</h2>
                    <p className="description">{article.summary || "No description available"}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockMarketApp;