import Image from 'next/image';
import ProfilePic from '../../../public/images/pfp.png'
import './profilecard.scss';


export default async function ProfileCard({ users }) {
    const listings = users.listings.length ? users.listings : await fetchListings(users.id) || [];
    const hasListings = listings.length > 0;

    return (
        <>
            <div className="profile-info">
                <Image className='profile-image' src={ProfilePic} width={150} height={150} alt='profile picture'></Image>
                <div className='profile-user'>
                    <p>Email: <span>{users.email}</span></p>
                    <p>Firstname: <span>{users.firstname}</span></p>
                    <p>Lastname: <span>{users.lastname}</span></p>
                </div>


            </div><div className="profile-items">
                <p>Items:</p>
                {hasListings ? (
                    <ul className="listings">
                        {listings.map(item => (
                            <li key={item.id} className="listing-card">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No listings found</p>
                )}
            </div>
        </>
    );
}