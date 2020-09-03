import ReactGA from "react-ga";

export const captureClick = (name) => {
  return () => {
    ReactGA.initialize("UA-167704928-1");
    const event = (category, action, label) => {
      ReactGA.event({
        category: category,
        action: action,
        label: label,
      });
    };
    event("Link", "Click", name);
  };
};
