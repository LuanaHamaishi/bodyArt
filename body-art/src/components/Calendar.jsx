import { Alert, Calendar, Badge } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";

const getListData = (value) => {
  let listData;

  switch (value.date()) {
    case 6:
      listData = [
        {
          type: "warning",
          content: "This is warning event.",
        },
        {
          type: "success",
          content: "This is usual event.",
        },
      ];
      break;

    case 10:
      listData = [
        {
          type: "warning",
          content: "This is warning event.",
        },
        {
          type: "success",
          content: "This is usual event.",
        },
        {
          type: "error",
          content: "This is error event.",
        },
      ];
      break;

    case 15:
      listData = [
        {
          type: "warning",
          content: "This is warning event",
        },
        {
          type: "success",
          content: "This is very long usual event。。....",
        },
        {
          type: "error",
          content: "This is error event 1.",
        },
        {
          type: "error",
          content: "This is error event 2.",
        },
        {
          type: "error",
          content: "This is error event 3.",
        },
        {
          type: "error",
          content: "This is error event 4.",
        },
      ];
      break;

    default:
  }
  return listData || [];
};

const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const App = () => {
  const [value, setValue] = useState(() => moment("2022-11-09"));
  const [selectedValue, setSelectedValue] = useState(() =>
    moment("2017-01-25")
  );

  // console.log(moment("2022-11-09"));

  useEffect(() => {
    // document
    //   .querySelectorAll(".ant-picker-calendar-date")
    //   .forEach((element) => {
    //     element.style.maxHeight = heightCell;
    //   });

    const smallCell = () => {
      document
        .querySelectorAll(".ant-picker-calendar-date-content")
        .forEach((element) => {
          element.style.height = "43px";
          element.style.width = "43px";
          // element.style.maxHeight = "43px";
          // element.style.maxWidth = "43px";
          // element.style.background = "#0000FF60";
          // element.style.borderRadius = "50%";
        });
    };
    smallCell();

    let handleMonthYear = document.querySelector(".ant-radio-button-wrapper");
    handleMonthYear.onchange = function () {
      smallCell();
    };
  }, []);

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue) => {
    setValue(newValue);
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    console.log(listData);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <Alert
        message={`You selected date: ${selectedValue?.format("YYYY-MM-DD")}`}
      />
      <Calendar
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
        fullscreen={true}
      />
    </>
  );
};
export default App;
