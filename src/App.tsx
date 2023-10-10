import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";

const data = [
  {
    name: "Modelo 1",
    fr: 0.34,
  },
  {
    name: "Modelo 2",
    fr: 0.85,
  },
  {
    name: "Modelo 3",
    fr: 0.16,
  },
  {
    name: "Modelo 4",
    fr: 0.32,
  },
  {
    name: "Modelo 4",
    fr: 0.03,
  },
];

const renderCustomizedLabel = (props: any) => {
  const { x, y, width, value } = props;
  const radius = 10;

  return (
    <g>
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#A8A7A6"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value + "%"}
      </text>
    </g>
  );
};

const formatarValor = (valor: number) => {
  // Formate o valor com duas casas decimais
  return valor.toFixed(2) + "%";
};

export default function App() {
  return (
    <BarChart
      width={500}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid vertical={false} horizontal={false} />
      <XAxis dataKey="name" tick={{ fill: "#A8A7A6" }} />
      <YAxis
        tickFormatter={formatarValor}
        tick={{ fill: "#A8A7A6" }}
        axisLine={false}
      />
      <Tooltip formatter={formatarValor} />
      <Bar
        dataKey="fr"
        fill="#1273BF"
        label={{
          position: "center",
          formatter: formatarValor,
          style: { fill: "#fff", fontWeight: "bold" },
        }}
      >
        <LabelList dataKey="fr" content={renderCustomizedLabel} />
      </Bar>
    </BarChart>
  );
}
