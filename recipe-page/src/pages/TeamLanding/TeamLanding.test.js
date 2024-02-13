import { render, screen } from '@testing-library/react';
import TeamLanding from './TeamLanding';

test('renders team landing page', () => {
    render(<TeamLanding />);
    
    // Assert that the "Meet The Team" heading is rendered
    const headingElement = screen.getByText(/Meet The Team/i);
    expect(headingElement).toBeInTheDocument();


    // Assert that the team members are rendered
    // const member1Element = screen.getByText(/Yunus Kocaman is a sophomore at Brandeis University. He is majoring in Computer Science and is interested in full stack development."/i);
    // expect(member1Element).toBeInTheDocument();

    const member2Element = screen.getByText(/Patrick Star is SpongeBob's best friend. He is known for his love of ice cream and his lack of intelligence./i);
   expect(member2Element).toBeInTheDocument();

    const member3Element = screen.getByText(/Joseph Sosa is SpongeBob's neighbor. He is known for his love of music and his dislike of SpongeBob./i);
    expect(member3Element).toBeInTheDocument();

    const member4Element = screen.getByText(/Mr. Krabs is the owner of the Krusty Krab. He is known for his love of money and his greed./i);
    expect(member4Element).toBeInTheDocument();
    
    // Assert that the images are rendered
    const memberImages = screen.getAllByRole('img', {name: /Member/i});
    expect(memberImages[0]).toHaveAttribute('src', 'yunus.jpg');

    expect(memberImages[1]).toHaveAttribute('src', 'Pakistan.png');
    expect(memberImages[2]).toHaveAttribute('src', 'sosa.jpg');
    expect(memberImages[3]).toHaveAttribute('src', 'Pakistan.png');
    
  
});
