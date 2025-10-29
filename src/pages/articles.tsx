import * as Content from "../articles/000_index";
import { Aside } from "../components/aside";
import { useState } from "react";

type ContentShape = typeof Content.default;
type ContentKey = keyof ContentShape;

export function Articles() {

  const [currentArticle, setCurrentArticle] = useState(Content.default.l1.lesson);

  const articles = [];

  for (let key of Object.keys(Content.default)) {
    articles.push(Content.default[key as ContentKey]);
  }

  return(<div className='content-container'>
    <Aside type='articles'>
      <h3>Tópicos</h3>
      {articles.map((article, i) => {
        return <p key={`article-link-${i}`}>
          <a onClick={ () => setCurrentArticle(article.lesson)}>
            {article.name}
          </a>
        </p>
      })}
    </Aside>
    <div className='lesson'>
      {currentArticle}
    </div>
  </div>);
}
