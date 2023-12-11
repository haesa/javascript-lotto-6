import OutputView from './View/OutputView';

export default async function repeatAsyncFunction(callback) {
  try {
    return await callback();
  } catch (error) {
    OutputView.printError(error);
    return await repeatAsyncFunction(callback);
  }
}
