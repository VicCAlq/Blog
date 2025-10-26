import * as Content from "../articles/000_index";
import { Aside } from "../components/aside";

export function Articles() {

  return(<>
    <Aside type="articles">
      Artigos
    </Aside>
    <h1>This is the articles page</h1>
    <Content.default.n001_computing_basics/>
  </>)
}
