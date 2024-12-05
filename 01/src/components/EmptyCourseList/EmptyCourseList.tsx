import { useEffect } from "react";
import Button from "../../common/Button/Button"

const EmptyCourseList = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      // Re-enable scrolling when the component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div className="flex items-center justify-center text-center h-screen">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Your List Is Empty</h1>
        <p>Please use 'Add New Course' button to add your first course</p>
        <div className="justify-center flex">
          <Button title="Add New Course" onClick={() => { }} />
        </div>
      </div>
    </div>
  )
}

export default EmptyCourseList