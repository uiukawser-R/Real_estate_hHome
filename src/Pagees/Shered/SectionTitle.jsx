/* eslint-disable react/prop-types */

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className=" md:w-4/12 my-8">
            <p  className="mb-2 border-b-2  border-orange-500">{subHeading}</p>
            <h3 className=" text-4xl uppercase  py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;