export default function PageThree() {


  return (
    <div className="bg-cyan-500">
      <section className="bg-white w-2/6 h-5/6">
      <h1>Send me a message</h1>
      <p>Feel free to Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorum repudiandae saepe veniam sapiente deserunt totam?</p>
      <form className="w-3/5">
        <input type="text" placeholder="name" />
        <input type="email" placeholder='email'/>
        <input type="text" placeholder='subject'/>
        <input type="text" placeholder='message'/>

        <button className="w-full bg-slate-400">Send</button>
      </form>

      </section>
    
    </div>
  );
}
