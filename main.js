const accessToken = "81c3d886bb50a6ece309a5c4ecb4bc71ef123b6e"

let globalData = null;

fetch(`https://www.strava.com/api/v3/athletes/22229438/stats?access_token=${accessToken}`)
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)
  globalData = data

})
.catch(err => {
    console.log(`error ${err}`)
});



document.getElementById('runButton').addEventListener('click', displayRun)
document.getElementById('rideButton').addEventListener('click', displayBike)

function displayRun () {
    document.querySelector('h2').innerText = `${globalData.all_run_totals.distance} miles`
}

function displayBike () {
    document.querySelector('h2').innerText = `${globalData.all_ride_totals.distance} miles`
}

// {
//     "biggest_ride_distance": 23798.2,
//     "biggest_climb_elevation_gain": 282.1999999999998,
//     "recent_ride_totals": {
//         "count": 1,
//         "distance": 6967.3798828125,
//         "moving_time": 2862,
//         "elapsed_time": 3206,
//         "elevation_gain": 303,
//         "achievement_count": 0
//     },
//     "all_ride_totals": {
//         "count": 134,
//         "distance": 1583242,
//         "moving_time": 370352,
//         "elapsed_time": 400781,
//         "elevation_gain": 22649
//     },
//     "recent_run_totals": {
//         "count": 4,
//         "distance": 30640.51025390625,
//         "moving_time": 12855,
//         "elapsed_time": 12955,
//         "elevation_gain": 309,
//         "achievement_count": 4
//     },
//     "all_run_totals": {
//         "count": 388,
//         "distance": 1969504,
//         "moving_time": 691351,
//         "elapsed_time": 720336,
//         "elevation_gain": 25532
//     },
//     "recent_swim_totals": {
//         "count": 0,
//         "distance": 0,
//         "moving_time": 0,
//         "elapsed_time": 0,
//         "elevation_gain": 0,
//         "achievement_count": 0
//     },
//     "all_swim_totals": {
//         "count": 9,
//         "distance": 13059,
//         "moving_time": 14485,
//         "elapsed_time": 16591,
//         "elevation_gain": 0
//     },
//     "ytd_ride_totals": {
//         "count": 10,
//         "distance": 80940,
//         "moving_time": 31876,
//         "elapsed_time": 35465,
//         "elevation_gain": 2242
//     },
//     "ytd_run_totals": {
//         "count": 45,
//         "distance": 234652,
//         "moving_time": 87521,
//         "elapsed_time": 88673,
//         "elevation_gain": 3484
//     },
//     "ytd_swim_totals": {
//         "count": 0,
//         "distance": 0,
//         "moving_time": 0,
//         "elapsed_time": 0,
//         "elevation_gain": 0
//     }
// }