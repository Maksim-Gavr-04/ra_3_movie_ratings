import Star from './Star';

interface StarsProps {
  count: number
}

function Stars({ count = 0 }: StarsProps) {
  if (count >= 1 && count <= 5) {
    return (
      <ul className='card-body-stars u-clearfix'>
        { [ ...Array(count).keys() ].map((_, index) => <li key={ index }><Star /></li>) }
      </ul>
    );
  } else console.error('The `count` parameter must be a number >= 1 and <= 5');
}

export default Stars;