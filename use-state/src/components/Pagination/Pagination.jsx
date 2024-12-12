import PaginationItem from "./PaginationItem/PaginationItem";
import PaginationArrow from "./PaginationArrow/PaginationArrow";

const Pagination = ({pages}) => {
	return (
		<ul className="pagination-container">
			<li><PaginationArrow/></li>
			{
				Array.from({length: pages}, (_, i) => (
					<li>
						<PaginationItem page={i + 1}/>
					</li>
				))
			}
			<li><PaginationArrow/></li>
		</ul>
	);
};

export default Pagination;
