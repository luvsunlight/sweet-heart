// import $ from "jquery"
import axios from "axios"

class DataHandler {
	constructor() {
		this._cloudKey = "YyX1v8CSYAFyfO3i2pQ2YzQWqjnT8z9M"
		this._urlAddData = "http://api.map.baidu.com/geodata/v3/poi/create"
		this._tableAddData = "195693"
		this.axiosInstance = axios.create({
			headers: {
				"Access-Control-Allow-Origin": "*"
			}
		})
	}
	addTimeTrack(currentPosition = [114.360282, 30.525103]) {
		let dumpData = {
			latitude: currentPosition[1],
			longtitude: currentPosition[0],
			coord_type: 3,
			Geotable_id: this._tableAddData,
			Ak: this._cloudKey
		}
		this.axiosInstance
			.post(this._urlAddData, {
				dumpData
			})
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}
}

export default DataHandler
