import $ from "jquery"

class DataHandler {
	contructor() {
		this._cloudKey = "9319c35bc37dc6ad0857a70c6c9000e1"
		this._urlAddData = "https://yuntuapi.amap.com/datamanage/data/create"
		this._tableAddData = "visitTrack"
	}
	addTimeTrack(currentPosition = [114.360282, 30.525103]) {
		let jsonData = {
			key: this._cloudKey,
			tableid: this._tableAddData,
			data: {
				_name: "xixi",
				_location: currentPosition
			}
		}
		$.ajax({
			type: "POST",
			url: this._urlAddData,
			data: jsonData,
			success: data => {
				var stat = data.status
				if (stat !== 1) console.log(data.info)
			},
			dataType: "json"
		})
	}
}

export default DataHandler
