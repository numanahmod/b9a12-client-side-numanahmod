

const SectionTitle = ({heading, subHeading }) => {
    return (
        <div className=" mx-auto text-center md:w-4/12 my-8 ">
            <p className=" text-red-300 mb-2 ">------{subHeading}------</p>
            <h2 className=" text-3xl text-amber-300 uppercase border-y-4 py-4"> {heading} </h2>
        </div>
    );
};

export default SectionTitle;