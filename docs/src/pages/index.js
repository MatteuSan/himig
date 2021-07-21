import * as React from "react"
import '../scss/style.scss';
import Header from "./components/Header";
import {Helmet} from "react-helmet";
import TitleBar from "./components/TitleBar";
import Banner from "./components/Banner";

const IndexPage = () => {
  return (
    <main>
        <Helmet>
            <title>HOME - StackCSS</title>
            <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />
        </Helmet>
        <Header />
        <Banner
            title="Stack"
            subtitle="The intuitive library for building user interfaces"
        />
        <section>
            <div className="wrap--content">
                <TitleBar>CONTENT TITLE</TitleBar>
            </div>
        </section>
    </main>
  )
}

export default IndexPage
