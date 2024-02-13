import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { NavBar} from "./navbar";

describe('NavBar', () => {
    test('renders Main Page link', () => {
      render(<NavBar />);
      const mainPageLink = screen.getByText('Main Page');
      expect(mainPageLink).toBeInTheDocument();
      expect(mainPageLink).toHaveAttribute('href', '/');
    });
  
    test('renders Team Page link and test functionality', () => {
      render(<NavBar />);
      const teamPageLink = screen.getByText('Team Page');
      expect(teamPageLink).toBeInTheDocument();
      expect(teamPageLink).toHaveAttribute('href', '/TeamLanding');
    });
  });