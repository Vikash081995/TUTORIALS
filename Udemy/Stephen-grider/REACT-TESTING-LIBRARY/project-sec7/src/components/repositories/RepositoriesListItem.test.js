import { render, screen } from "@testing-library/react";
import RepositoriesListItem from "./RepositoriesListItem";
import { MemoryRouter } from "react-router-dom";

jest.mock("../tree/FileIcon.js", () => {
  return () => {
    return "File icon Component";
  };
});

function renderComponent() {
  const repository = {
    full_name: "facebook",
    language: "javascript",
    description: "a js library",
    owner: {
      login: "facebook"
    },
    name: "react",
    html_url: "https://github.com/fcebook/react"
  };

  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );
  return { repository };
}

test("show a link to the github homepage for this repository", async () => {
  const { repository } = renderComponent();
  await screen.findByRole("img", { name: "Javascript" });

  const link = screen.getByRole("link", {
    name: /github repository/i
  });
  expect(link).toHaveAttribute("href", repository.html_url);

  //   await act(async () => {
  //     await pause();
  //   });
});

// const pause = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 100);
//   });
// };

test("shows a fileIcon with the appropriate icon", async () => {
  renderComponent();

  const icon = await screen.findByRole("img", { name: "Javascript" });

  expect(icon).toHaveClass("js-icon");
});

test("shows a link to the code editor page", async () => {
  const { repository } = renderComponent();
  await screen.findByRole("img", { name: "Javascript" });

  const link = await screen.findByRole("link", {
    name: new RegExp(repository.owner.login)
  });

  expect(link).toHaveAttribute("href", `/repositories/${repository.full_name}`);
});
