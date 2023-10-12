import { serve } from "bun";
import Page from "./components/Page";
import Home from "./components/Home";
import { renderToReadableStream } from "react-dom/server";
const PORT = 8080;

async function getContacts() {
  try {
    const db = new Database("test.sqlite");
    const query = db.query("select * from contacts;");
    return await query.all();
  }
  catch(e) {
    return e;
  }
}

async function renderComponent(Content, props = {}) {
  return await renderToReadableStream(<Page url={props.url}>
      <Content {...props} />  
    </Page>);
}

async function responseStatic(url) {
  const filePath = '.' + url.pathname;
  const file = Bun.file(filePath);
  return new Response(file);
}

async function router(url) {
  const headers = { "Content-Type": "text/html" };
  return new Response(await renderComponent(Home, {url}), {headers: headers});
}

async function streamToString(stream) {
  const chunks = [];

  for await (const chunk of stream) {
    chunks.push(Buffer.from(chunk));
  }

  return Buffer.concat(chunks).toString("utf-8");
}

serve({
  async fetch(req, server) {
    const url = new URL(req.url);
    if(url.pathname.startsWith('/public/')) return await responseStatic(url);
    if(url.pathname === "/ws") return server.upgrade(req);
    return await router(url);
  },
  websocket: {
    open(ws) {
      setInterval(async () => {
        ws.send(await streamToString(await renderToReadableStream(<Clock />)));
      }, 1000);
    },
    message(ws, message) {
      ws.send(message);
    },
  },
  port: PORT
});