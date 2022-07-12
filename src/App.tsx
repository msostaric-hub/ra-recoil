import { RecoilRoot } from "recoil";
import { Routing } from "modules/routing";
import { Layout } from "modules/shared";

function App() {
  return (
    <RecoilRoot>
      <Layout>
        <Routing />
      </Layout>
    </RecoilRoot>
  );
}

export default App;
