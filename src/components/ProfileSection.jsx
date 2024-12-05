import ProfilePic from './ProfilePic'

const Profile = () => {
    return (
        <div>
            <div className="flex flex-row items-center justify-center space-x-8">
                <ProfilePic className="min-w-20 min-h-20 max-w-96 max-h-96" />
                <div className="space-y-2">
                    <h1 className="text-white text-4xl font-semibold">Christabel Orji</h1>
                    <button className="text-base text-gray-400">Edit your profile</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;