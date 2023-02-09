import { memo } from "react";

const Progress = ({name, value}) => {
    return (
        <div>
            <div>
                <progress value={value || 0} max={100} />
            </div>
        </div>
    );
};

export default memo(Progress);