import Feed from '@/components/Feed.jsx';
const Home = () => {
  return (
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text_center">
            Discover & Share 
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">AI Powerd Prompts</span>
        </h1>
        <p className="text-center desc">
            Promtopia is an open-source AI Prompting tool for modern world to discover, create and share creative prompts.
        </p>
        <Feed />
      </section>
    )
}

export default Home