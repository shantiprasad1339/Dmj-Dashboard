import React from "react";
import MainCategory from '../../Dashboard/MainCategory/MainCategory';
import { Link } from "react-router-dom";

function FAQ() {
    return (
        <>
            <MainCategory>
                <div class="pagetitle">
                    <h1>Frequently Asked Questions</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active">Frequently Asked Questions</li>
                        </ol>
                    </nav>
                </div>

                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Basic Questions</h5>

                        <div class="accordion accordion-flush" id="faq-group-1">

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" data-bs-target="#faqsOne-1" type="button" data-bs-toggle="collapse">
                                        Debitis adipisci eius?
                                    </button>
                                </h2>
                                <div id="faqsOne-1" class="accordion-collapse collapse" data-bs-parent="#faq-group-1">
                                    <div class="accordion-body">
                                        Ut quasi odit odio totam accusamus vero eius. Nostrum asperiores voluptatem eos nulla ab dolores est asperiores iure. Quo est quis praesentium aut maiores. Corrupti sed aut expedita fugit vero dolorem. Nemo rerum sapiente. A quaerat dignissimos.
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" data-bs-target="#faqsOne-2" type="button" data-bs-toggle="collapse">
                                        Omnis fugiat quis repellendus?
                                    </button>
                                </h2>
                                <div id="faqsOne-2" class="accordion-collapse collapse" data-bs-parent="#faq-group-1">
                                    <div class="accordion-body">
                                        In minus quia impedit est quas deserunt deserunt et. Nulla non quo dolores minima fugiat aut saepe aut inventore. Qui nesciunt odio officia beatae iusto sed voluptatem possimus quas. Officia vitae sit voluptatem nostrum a.
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" data-bs-target="#faqsOne-3" type="button" data-bs-toggle="collapse">
                                        Et occaecati praesentium aliquam modi incidunt?
                                    </button>
                                </h2>
                                <div id="faqsOne-3" class="accordion-collapse collapse" data-bs-parent="#faq-group-1">
                                    <div class="accordion-body">
                                        Voluptates magni amet enim perspiciatis atque excepturi itaque est. Sit beatae animi incidunt eum repellat sequi ea saepe inventore. Id et vel et et. Nesciunt itaque corrupti quia ducimus. Consequatur maiores voluptatum fuga quod ut non fuga.
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" data-bs-target="#faqsOne-4" type="button" data-bs-toggle="collapse">
                                        Quo unde eaque vero dolor quis ipsam?
                                    </button>
                                </h2>
                                <div id="faqsOne-4" class="accordion-collapse collapse" data-bs-parent="#faq-group-1">
                                    <div class="accordion-body">
                                        Numquam ut reiciendis aliquid. Quia veritatis quasi ipsam sed quo ut eligendi et non. Doloremque sed voluptatem at in voluptas aliquid dolorum.
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" data-bs-target="#faqsOne-5" type="button" data-bs-toggle="collapse">
                                        Natus sunt quo atque mollitia accusamus?
                                    </button>
                                </h2>
                                <div id="faqsOne-5" class="accordion-collapse collapse" data-bs-parent="#faq-group-1">
                                    <div class="accordion-body">
                                        Aut necessitatibus maxime quis dolor et. Nihil laboriosam molestiae qui molestias placeat corrupti non quo accusamus. Nemo qui quis harum enim sed. Aliquam molestias pariatur delectus voluptas quidem qui rerum id quisquam. Perspiciatis voluptatem voluptatem eos. Vel aut minus labore at rerum eos.
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </MainCategory>
        </>
    );
}

export default FAQ;