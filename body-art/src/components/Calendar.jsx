import {
  Calendar,
  Col,
  // Radio,
  Row,
  Select,
  // Typography
} from "antd";
import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../assets/colors";

const CalendarComponent = ({ dataCalendar, dataSelected }) => {
  const [value, setValue] = useState(moment(dataSelected));
  // () => moment("2022-11-15")
  const [selectedValue, setSelectedValue] = useState(moment(dataSelected));
  // () => moment("2017-01-25")

  const ContainerCalendar = styled.div`
    width: 100%;
    height: 100%;
  `;

  const ContainerCell = styled.div`
    border: solid 1px #00000008;
    width: 100%;
    height: 3.8rem;
    transition: 0.1s;
    :hover {
      background-color: ${color.beigeEmphasis};
      border-radius: 3px;
    }
  `;

  const Cell = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
  `;

  const CellDay = styled.div`
    padding: 0px 4px;
    width: 100%;
  `;

  const CellDescription = styled.div`
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const CellAgendamento = styled.div`
    display: flex;
    width: 28px;
    height: 28px;
    justify-content: center;
    align-items: center;
    background-color: ${color.bluePrimary};
    border-radius: 100%;
    color: ${color.shineWhite};
    font-weight: 600;
  `;

  // useEffect(() => {
  //   // CADA CELULA
  //   document
  //     .querySelectorAll(".ant-picker-calendar-date-content")
  //     .forEach((element) => {
  //       element.style.maxHeight = "38px";
  //       // element.style.minHeight = "28px";
  //       element.style.minWidth = "28px";
  //       // element.style.maxWidth = "45px";
  //       element.style.display = "flex";
  //       element.style.overflow = "hidden";
  //       element.style.justifyContent = "center";
  //       element.style.alignItems = "center";
  //       // element.style.background = "red";
  //     });

  //   // HEADER DO CALENDARIO
  //   document
  //     .querySelectorAll(".ant-picker-calendar-header")
  //     .forEach((element) => {
  //       element.style.padding = "2% 0px";
  //       // element.style.position = "sticky";
  //       // element.style.top = "10px";
  //     });

  //   // CALENDAR DATE INNER
  //   document
  //     .querySelectorAll(".ant-picker-calendar-date")
  //     .forEach((element) => {
  //       element.style.padding = "0px";
  //       // element.style.position = "sticky";
  //       // element.style.top = "10px";
  //     });

  //   // CALENDARIO INTEIRO
  //   document.querySelectorAll(".ant-picker-calendar").forEach((element) => {
  //     element.style.borderRadius = "25px";
  //   });

  //   // BODY DA TABLE DO CALENDARIO
  //   document.querySelectorAll(".ant-picker-body").forEach((element) => {
  //     element.style.padding = "0px";
  //     // element.style.background = `${color.blueSecondary}`;
  //   });

  //   // CONTAINER BOTAO MES E ANO (RETIRAR)
  //   document
  //     .querySelectorAll(".ant-picker-calendar-mode-switch")
  //     .forEach((element) => {
  //       element.style.display = "none";
  //     });

  //   // BOTAO MES
  //   // let handleMonthYear = document.querySelector(".ant-radio-button-wrapper");
  //   // handleMonthYear.onchange = function () {
  //   //   smallCell();
  //   // };
  // }, [selectedValue, value, dataCalendar, dataSelected]);

  // useEffect(() => {
  //   // CONTAINER BOTAO MES E ANO (RETIRAR)
  //   document
  //     .querySelectorAll(".ant-picker-calendar-mode-switch")
  //     .forEach((element) => {
  //       element.style.display = "none";
  //     });
  // }, []);

  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  // const onPanelChange = (newValue) => {
  //   setValue(newValue);
  //   // console.log(newValue);
  // };

  const headerRender = ({ value, type, onChange, onTypeChange }) => {
    const start = 0;
    const end = 12;
    const monthOptions = [];
    let current = value.clone();
    const localeData = value.localeData();
    const months = [];
    for (let i = 0; i < 12; i++) {
      current = current.month(i);
      months.push(localeData.monthsShort(current));
    }
    for (let i = start; i < end; i++) {
      monthOptions.push(
        <Select.Option key={i} value={i} className="month-item">
          {months[i]}
        </Select.Option>
      );
    }
    const NewSelect = styled(Select)`
      width: ${({ width }) => (width ? width : null)};
      color: ${color.bluePrimary};
      border: none;
      border-radius: 5px;
      box-shadow: 1px 1px 1px 1px ${color.blueSecondary};
      :focus {
        border: none;
        box-shadow: 1px 1px 1px 1px ${color.blueSecondary};
      }
    `;
    const year = value.year();
    const month = value.month();
    const options = [];
    for (let i = year - 10; i < year + 10; i += 1) {
      options.push(
        <Select.Option key={i} value={i} className="year-item">
          {i}
        </Select.Option>
      );
    }
    return (
      <div
        style={{
          padding: 13,
        }}
      >
        <Row gutter={8}>
          {/* <Col>
            <Radio.Group
              size="small"
              onChange={(e) => onTypeChange(e.target.value)}
              value={type}
            >
              <Radio.Button value="month">Month</Radio.Button>
              <Radio.Button value="year">Year</Radio.Button>
            </Radio.Group>
          </Col> */}
          <Col>
            <NewSelect
              // size="small"
              dropdownMatchSelectWidth={false}
              className="my-year-select"
              value={year}
              onChange={(newYear) => {
                const now = value.clone().year(newYear);
                onChange(now);
              }}
            >
              {options}
            </NewSelect>
          </Col>
          <Col>
            <NewSelect
              // size="small"
              dropdownMatchSelectWidth={false}
              value={month}
              onChange={(newMonth) => {
                const now = value.clone().month(newMonth);
                onChange(now);
              }}
            >
              {monthOptions}
            </NewSelect>
          </Col>
        </Row>
      </div>
    );
  };

  const dateFullCellRender = (value) => {
    let dataAtualCelula = moment(value).format("DD-MM-YYYY");
    let dataAtualCelulaDay = moment(value).format("DD");
    let qtdAgendaDataAtual = 0;

    const RenderCell = ({ children }) => {
      if (dataAtualCelula !== moment(selectedValue).format("DD-MM-YYYY")) {
        return <ContainerCell>{children}</ContainerCell>;
      } else {
        return (
          <ContainerCell
            style={{
              backgroundColor: color.blue,
              borderRadius: "5px",
              borderBottom: `2px solid ${color.bluePrimary}`,
              // boxShadow: `0.5px 0.5px 0.5px 0.5px ${color.bluePrimary}`,
              color: `${color.darkBlue}`,
            }}
          >
            {children}
          </ContainerCell>
        );
      }
    };

    const renderCellAtual = () => {
      if (dataCalendar !== null) {
        try {
          dataCalendar.forEach((element, indice) => {
            let vetorData = element.dataHoraCheckin;
            let dataBanco = `${vetorData[2]}-${vetorData[1]}-${vetorData[0]}`;

            if (dataAtualCelula === dataBanco) {
              qtdAgendaDataAtual++;
            }
          });
        } catch (error) {
          console.log(error);
        }
      }
    };

    renderCellAtual();

    return (
      <>
        <RenderCell>
          <Cell>
            <CellDay>{dataAtualCelulaDay}</CellDay>
            <CellDescription>
              {qtdAgendaDataAtual !== 0 ? (
                <CellAgendamento>{qtdAgendaDataAtual}</CellAgendamento>
              ) : null}
            </CellDescription>
          </Cell>
        </RenderCell>
      </>
    );
  };

  return (
    <ContainerCalendar>
      {/* <Alert
        message={`You selected date: ${selectedValue?.format("YYYY-MM-DD")}`}
      /> */}
      <Calendar
        value={value}
        onSelect={onSelect}
        // onPanelChange={onPanelChange}
        headerRender={headerRender}
        dateFullCellRender={dateFullCellRender}
        fullscreen={true}
        mode="month"
      />
    </ContainerCalendar>
  );
};
export default CalendarComponent;
