import AuthComponent from "@/components/component/AuthComponent";

export default function Page() {
    return (
        <div className="w-full h-full ">
            <AuthComponent signInComponent={true} />
        </div>
    )
}