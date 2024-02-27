import { render, screen } from '@testing-library/react';
import TeamLanding from './TeamLanding';

test('renders team landing page', () => {
    render(<TeamLanding />);
    
    // Assert that the "Meet The Team" heading is rendered
    const headingElement = screen.getByText(/Meet The Team/i);
    expect(headingElement).toBeInTheDocument();


    // Assert that the team members are rendered
    const member1Element = screen.getByText(/Software Engineer/i);
    expect(member1Element).toBeInTheDocument();

    const member2Element = screen.getByText(/Software Engineer/i);
   expect(member2Element).toBeInTheDocument();

    const member3Element = screen.getByText(/Software Engineer/i);
    expect(member3Element).toBeInTheDocument();

    const member4Element = screen.getByText(/Software Engineer/i);
    expect(member4Element).toBeInTheDocument();
    
    // Assert that the images are rendered
    const memberImages = screen.getAllByRole('img', {name: /Member/i});
    expect(memberImages[0]).toHaveAttribute('src', 'model.jpg');

    expect(memberImages[1]).toHaveAttribute('src', 'model.jpg');
    expect(memberImages[2]).toHaveAttribute('src', 'model.jpg');
    expect(memberImages[3]).toHaveAttribute('src', 'model.jpg');

    
  
});
