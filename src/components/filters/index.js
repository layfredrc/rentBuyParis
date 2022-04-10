import { useState } from "react";
import {
	Button,
	Checkbox,
	NumberInput,
	RangeSlider,
	Menu,
	Radio,
	RadioGroup,
	MultiSelect,
	Collapse,
	Group,
} from "@mantine/core";
import { BiSlider } from "react-icons/bi";
import { MdRefresh } from "react-icons/md";

// Components
import Filter from "../filter";

// Style
import styles from "./index.module.css";

const marks = [
	{ value: 0, label: "0€" },
	{ value: 100, label: "10000€" },
];

const districts = {
	data: [
		{ value: "1", label: "1er arr (Louvre)", group: "Paris" },
		{ value: "2", label: "2ème arr (Opéra)", group: "Paris" },
		{ value: "3", label: "3ème arr (Marais)", group: "Paris" },
		{
			value: "4'",
			label: "4ème arr (Notre-Dame de Paris)",
			group: "Paris",
		},
		{
			value: "5",
			label: "5ème arr (Saint-Michel)",
			group: "Paris",
		},
		{
			value: "6",
			label: "6ème arr (Saint-Germain)",
			group: "Paris",
		},
		{ value: "7", label: "7ème arr (Invalides)", group: "Paris" },
		{
			value: "8",
			label: "8ème arr (Champs-Elysées)",
			group: "Paris",
		},
		{
			value: "9",
			label: "9ème arr (Galeries Lafayette)",
			group: "Paris",
		},
		{
			value: "10",
			label: "10ème arr (Place de la République)",
			group: "Paris",
		},
		{ value: "11", label: "11ème arr (Bastille)", group: "Paris" },
		{
			value: "12",
			label: "12ème arr (Gare de Lyon)",
			group: "Paris",
		},
		{
			value: "13",
			label: "13ème arr (Gare d'Austerlitz)",
			group: "Paris",
		},
		{
			value: "14",
			label: "14ème arr (Denfert-Rochereau)",
			group: "Paris",
		},
		{
			value: "15",
			label: "15ème arr (Tour Eiffel)",
			group: "Paris",
		},
		{ value: "16", label: "16ème arr (Trocadéro)", group: "Paris" },
		{
			value: "17",
			label: "17ème arr (Place des Ternes)",
			group: "Paris",
		},
		{
			value: "18",
			label: "18ème arr (Montmartre)",
			group: "Paris",
		},
		{
			value: "19",
			label: "19ème arr (Parc des Buttes-Chaumont)",
			group: "Paris",
		},
		{
			value: "20",
			label: "20ème arr (Père Lachaise)",
			group: "Paris",
		},
		{ value: "92", label: "92 (Hauts-de-Seine)", group: "Suburb" },
	],
};

export default function Filters({
	district,
	setDistrict,
	priceInterval,
	setPriceInterval,
	parking,
	setParking,
	elevator,
	setElevator,
	garden,
	setGarden,
	terrace,
	setTerrace,
	resetFilters,
	orderBy,
	setOrderBy,
}) {
	const [opened, setOpen] = useState(false);

	return (
		<div>
			<div className={styles.mobile}>
				<Button
					color='dark'
					radius={0}
					size='md'
					className={styles.button}
					leftIcon={<BiSlider color='white' size={18} />}
					onClick={() => setOpen((o) => !o)}
					style={{ marginTop: "1.5rem" }}>
					Apply Filter
				</Button>
				<Collapse in={opened} style={{ marginTop: "2rem" }}>
					<Group position='center'>
						<div>
							<Filter title='District'>
								<div style={{ display: "flex" }}>
									<div style={{ width: "100%", marginRight: "10px" }}>
										<MultiSelect
											placeholder='Choose a District'
											data={districts.data}
											transitionDuration={150}
											transition='pop-top-left'
											transitionTimingFunction='ease'
											value={district}
											onChange={setDistrict}
											clearable
										/>
									</div>
								</div>
							</Filter>
						</div>
						<div>
							<Filter title='Price'>
								<RadioGroup value={orderBy} onChange={setOrderBy}>
									<Radio value='ascending'>
										<span style={{ fontSize: "14px" }}>Low - High</span>
									</Radio>
									<Radio value='descending'>
										<span style={{ fontSize: "14px" }}>High - Low</span>
									</Radio>
								</RadioGroup>
							</Filter>
						</div>
						<div>
							<Filter title='General'>
								<Checkbox
									onChange={(event) => setParking(event.target.checked)}
									checked={parking}
									label='Parking'
									style={{ marginBottom: "10px" }}
								/>
								<Checkbox
									onChange={(event) => setElevator(event.target.checked)}
									checked={elevator}
									label='Elevator'
									style={{ marginBottom: "10px" }}
								/>
								<Checkbox
									onChange={(event) => setGarden(event.target.checked)}
									checked={garden}
									label='Garden'
									style={{ marginBottom: "10px" }}
								/>
								<Checkbox
									onChange={(event) => setTerrace(event.target.checked)}
									checked={terrace}
									label='Terrace / Balcony'
									style={{ marginBottom: "10px" }}
								/>
							</Filter>
						</div>
					</Group>
					<div style={{ textAlign: "center", marginTop: "1rem" }}>
						<Button
							color='dark'
							radius={0}
							size='md'
							leftIcon={<BiSlider color='white' size={18} />}
							onClick={resetFilters}>
							Reset filters
						</Button>
					</div>
				</Collapse>
			</div>

			<div className={styles.desktop}>
				<Filter title='District'>
					<div style={{ display: "flex" }}>
						<div style={{ marginRight: "10px", width: "100%" }}>
							<MultiSelect
								placeholder='Choose a District'
								data={districts.data}
								transitionDuration={150}
								transition='pop-top-left'
								transitionTimingFunction='ease'
								value={district}
								onChange={setDistrict}
								clearable
							/>
						</div>
					</div>
				</Filter>
				<Filter title='Price'>
					<RangeSlider
						value={[priceInterval[0], priceInterval[1]]}
						color='#3EA6C7'
						marks={marks}
						label={(value) => `${value * 100} €`}
						styles={(theme) => ({
							label: {
								backgroundColor: theme.white,
								color: theme.black,
							},
						})}
						onChange={(value) => setPriceInterval(value)}
					/>
				</Filter>
				<Filter title='General'>
					<Checkbox
						onChange={(event) => setParking(event.target.checked)}
						checked={parking}
						label='Parking'
						style={{ marginBottom: "10px" }}
					/>
					<Checkbox
						onChange={(event) => setElevator(event.target.checked)}
						checked={elevator}
						label='Elevator'
						style={{ marginBottom: "10px" }}
					/>
					<Checkbox
						onChange={(event) => setGarden(event.target.checked)}
						checked={garden}
						label='Garden'
						style={{ marginBottom: "10px" }}
					/>
					<Checkbox
						onChange={(event) => setTerrace(event.target.checked)}
						checked={terrace}
						label='Terrace / Balcony'
						style={{ marginBottom: "10px" }}
					/>
				</Filter>
				<div style={{ textAlign: "center" }}>
					<Button
						color='dark'
						radius={0}
						size='md'
						leftIcon={<BiSlider color='white' size={18} />}
						onClick={resetFilters}>
						Reset filters
					</Button>
				</div>
			</div>
		</div>
	);
}
