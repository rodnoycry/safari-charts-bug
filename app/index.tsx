import { LineChart } from "react-native-gifted-charts";

const data = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];

const App: React.FC = () => {
  return <LineChart data={data} />;
};

export default App;
