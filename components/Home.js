function Home() {
  return (
    <div>
      <div style={{ 
        backgroundColor: 'red',
        width: '100px',
        height: '100px',
        pointer: 'cursor'
        }} id="animated"></div>
      <div id="container"></div>
      <pizza-store id="pizza" pizza-type="Margarita"></pizza-store>
    </div>
  )
}

export default Home;