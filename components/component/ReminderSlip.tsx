export default function ReminderSlip(){
    return (
        <div className="w-full h-9 bg-[#111111] flex justify-center items-center space-x-3" >
            <p className="font-poppins font-bold text-sm">
            To save ur tasks, Please confirm your email address ( email ) in next 7 days.
            </p>
            <div className="flex justify-center items-center space-x-3">
                <p className="font-poppins font-bold text-sm text-blue-600">
                    Check your inbox
                </p>
                <p className="font-poppins font-bold text-sm text-blue-600">
                    Resend email
                </p>
            </div>
        </div>
    )
}