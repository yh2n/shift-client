import React from "react";
import { shallow, mount } from "enzyme";

import AvailabilityPage from "./index";

describe("<AvailabilityPage />", () => {
    it("Renders without crashing", () => {
        shallow(<AvailabilityPage />);
    });
});
