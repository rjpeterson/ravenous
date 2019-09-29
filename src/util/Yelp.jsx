const apiKey = '3QOX70_6fEBMUOhW5AT_5U0Py_xr0zko32AHcC1gIxY1XJ0p4VXLLAOBO_EPs2MFWAKReqYclO9OaiePCLNdfPtTADK84r8UaPJeb-KpvKvxIuxkCNlYR1TbmGWPXXYx';

const yelp = {
    search(term, location, sortBy) {
        return (
            fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }
            ).then(response => {return response.json()
            }
            ).then(jsonResponse => {if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business);
                    return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }
                }
                )
            }
            }
            )
        )
    }
};

export default yelp;