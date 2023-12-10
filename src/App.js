import InputView from './View/InputView';

class App {
  async play() {
    const buyingPrice = await InputView.readBuyingPrice();
  }
}

export default App;
