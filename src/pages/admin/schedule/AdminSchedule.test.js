import React from "react";
import { shallow, mount } from "enzyme";

import AdminSchedule from "./index";

describe("<AdminSchedule />", () => {
    it("renders without crashing", () => {
        shallow(<AdminSchedule />);
    });
});
