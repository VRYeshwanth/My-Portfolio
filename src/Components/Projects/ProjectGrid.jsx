import Card from "./Card"

export default function ProjectGrid() {
    return (
        <div className="card-grid">
            <Card class="bx bx-news" heading="News Scraper" description="A Web Scraper built using python which scrapes news information from India Today and stores it in a JSON format for future reference"/>
            <Card class="bx bxs-file-pdf" heading="PDF Utility Tool" description="A GUI built using Tkinter which allows you to perform multiple PDF operations like merging and splitting"/>
            <Card class="bx bxs-grid" heading="Sudoku Solver" description="A CLI based solver which uses recursion and backtracking to solve a given sudoku"/>
        </div>
    )
}