// made with heart (as always)
class HTMLGen {
            paragraph(p) {
                return `<p>${p}</p>`;
            }

            block(div) {
                return `<div style="height: 10%;", class="autodiv">${div}</div>`;
            }

            title(title) {
                return `<h1>${title}</h1>`;
            }

            coment(coment) {
                return `<!--${coment}-->`;
            }

            link(a, text = a) {
                return `<a href="${a}" target="_blank">${text}</a>`;
            }

            textBlock(span) {
                return `<span>${span}</span>`;
            }

            body(body) {
                return `<body>${body}</body>`;
            }

            bold(b) {
                return `<p><b>${b}</b></p>`;
            }

            write(html) {
                document.getElementById('output').innerHTML += html;
            }
        }

        let ht = new HTMLGen();
        ht.write(ht.title("Hello webpage."));
        ht.write(ht.block("This is inside a div, i swear"));
        ht.write(ht.paragraph("It does works."));
        ht.write(ht.link("https://example.com"));
        ht.write(ht.bold("This is bold."));
        ht.write(console.log("This is a comment."));
        ht.write(ht.textBlock("This is a span"));