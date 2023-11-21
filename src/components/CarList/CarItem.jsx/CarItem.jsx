import React from 'react';

function CarItem({ car }) {
  const { id, img, brand, model, year, features, description, price } = car;

  //   const dispatch = useDispatch();
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  //   const switchModel = isOpen => {
  //     setIsModalOpen(isOpen);
  //   };

  /* <button type='button' onClick={switchModel(true)}>View more</button>
          {isModalOpen(true) &&} */

  return (
    <li key={id}>
      <img src={img} alt={`${brand} ${model} ${year}`} />
      <div>
        {brand}
        <div>
          {model} <span>,</span>
        </div>
        {year}
        <div>
          {description}
          {features}
        </div>
        {price}
      </div>
    </li>
  );
}

export default CarItem;
