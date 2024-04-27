// import PropTypes from 'prop-types'
// import { NavLink } from 'react-router-dom';

// const TourismCard = ({ data }) => {
//     const {_id} = data;
//     console.log(data)
//     return (
//         <div className="card w-11/12 bg-base-100 shadow-xl mt-20">
//             <figure className="px-10 pt-10">
//                 <img src={data.name} alt="Shoes" className="rounded-xl" />
//             </figure>
//             <div className="card-body items-center text-center">
//                 <h2 className="card-title">{data.image}</h2>
//                 <button className="btn w-full btn-success text-white mt-4"><NavLink to={`/viewDetails/${_id}`}>{data.image} All Place View </NavLink></button>
//             </div>
//         </div>
//     );
// };

// TourismCard.propTypes = {
//     data: PropTypes.object
// }

// export default TourismCard;