function Page({children, url}) {
  return (
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        {children}
        <script src="/public/main.js" type="module" />
      </body>
    </html>
  )
}

export default Page;