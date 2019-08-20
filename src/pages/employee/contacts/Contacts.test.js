import React from "react";
import { shallow, mount } from "enzyme";

import Contacts from "./index";

describe("<Contacts />", () => {
    it("Renders without crashing", () => {
        shallow(<Contacts />);
    });
});
