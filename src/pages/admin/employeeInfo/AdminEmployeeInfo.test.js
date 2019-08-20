import React from "react";
import { shallow, mount } from "enzyme";

import AdminEmployeeInfo from "./index";

const match = { params: { id: 1234567890 } };

describe("<AdminEmployeeInfo />", () => {
    it("Renders without crashing", () => {
        shallow(<AdminEmployeeInfo match={match} />);
    });
});
