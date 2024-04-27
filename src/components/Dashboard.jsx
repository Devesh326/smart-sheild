import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
	const { email } = useAuth()

	// values = {
	// 	oxygen: 97,
	// 	heartRate: 67,
	// 	temperature: 35,
	// 	acc: 0.03,
	// }

	return (
		<table class='table' style={{ marginTop: '100px' }}>
			<thead>
				<tr>
					<th scope='col'>#</th>
					<th scope='col'>OXYGEN</th>
					<th scope='col'>HEART RATE</th>
					<th scope='col'>TEMPERATURE</th>
					<th scope='col'>ACCELERATION</th>
					<th scope='col'>FLAGS</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope='row'>1</th>
					<td>92</td>
					<td>70</td>
					<td>34</td>
					<td>0.1</td>
					<td>TRUE</td>
				</tr>
				<tr>
					<th scope='row'>2</th>
					<td>97</td>
					<td>67</td>
					<td>35</td>
					<td>0.03</td>
					<td>FALSE</td>
				</tr>
				<tr>
					<th scope='row'>3</th>
					<td>94</td>
					<td>71</td>
					<td>30</td>
					<td>0.00</td>
					<td>FALSE</td>
				</tr>

				<tr>
					<th scope='row'>3</th>
					<td>91</td>
					<td>71</td>
					<td>35</td>
					<td>0.03</td>
					<td>FALSE</td>
				</tr>

				<tr>
					<th scope='row'>3</th>
					<td>97</td>
					<td>67</td>
					<td>35</td>
					<td>0.03</td>
					<td>FALSE</td>
				</tr>

				<tr>
					<th scope='row'>3</th>
					<td>97</td>
					<td>67</td>
					<td>35</td>
					<td>0.03</td>
					<td>FALSE</td>
				</tr>
			</tbody>
		</table>
	)
}
