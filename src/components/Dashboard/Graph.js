import React, { useEffect } from "react";
import { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { graphAction } from "../Redux/Actions/graphAction";

const Graph = () => {

  const dispatch = useDispatch()
  const graph = useSelector((state) => state.graph);
  // console.log(allUserList.adminInfo);
  const { loading, error, graphData } = graph;
  // console.log(graphData.graphDepositResponses);
  const [isloading, setIsloading] = useState(true);
  const stopLoading = () => {
    setIsloading(false);
  };
  useEffect(() => {
    dispatch(graphAction())
    stopLoading();
  }, [dispatch])

  // isloading ? console.log("loading") : loading ? console.log("load") : console.log(graphData.graphDepositResponses[0].depositAmount);

  return (
    <div>
      {isloading ? (
        <div className="d-flex justify-content-center text-primary">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : loading ? (
        <div className="d-flex justify-content-center text-primary">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) :

        graphData && graphData.graphDepositResponses.map((data) => {
          return (
            <Line
              data={{
                // labels: [graphData.graphDepositResponses[0].depositOn],
                labels: [String(new Date(parseInt(data.depositOn)).getDay()) + "/" +
                  String(new Date(parseInt(data.depositOn)).getMonth() + "/" +
                    String(new Date(parseInt(data.depositOn)).getFullYear()))],
                datasets: [
                  {
                    label: "Total Deposit",
                    data: [data.depositAmount],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 5,
                  },
                  {
                    label: "Total Income",
                    data: [2000, 2504, 2800, 3000, 3500, 5000],
                    backgroundColor: "yellow",
                    borderColor: "red",
                    borderWidth: 5,
                  },
                ],
              }}
              height={450}
              width={780}
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }}
            />
          )
        })

      }

    </div>
  );
};

export default Graph;
