# Slack Thread Formatting Guidelines

Slack threads are a recurring feature in the Divine DevOps Universe, used to add humor, context, or in-universe commentary to posts. Below are the guidelines for formatting and structuring Slack threads, along with an example.

## Purpose
Slack threads are used to:
- Simulate in-universe team discussions or banter.
- Provide additional context or humor related to the main event.
- Highlight reactions or commentary from key characters.

## Structure
1. **Container**: Use a `<div class="slack-log">` to wrap the entire thread.
2. **Message Block**: Each message is a `<div class="slack-msg">`.
3. **Header**: Include a `<div class="slack-header">` with:
   - `<span class="slack-user [username]">`: The sender's name.
   - `<span class="slack-time">`: The timestamp of the message.
4. **Message Text**: Use a `<div class="slack-text">` for the message content.

> **Note**: The modular includes (`slack-thread-start.html`, `slack-thread-message.html`, and `slack-thread-end.html`) will generate this structure automatically.

## Example 1: Using Includes

To simplify Slack thread creation, you can use the modular includes:

```liquid
{% include slack-thread-start.html %}

{% include slack-thread-message.html user="Gabriel" time="3:32pm" text="Did anyone check the quota limits?" %}
{% include slack-thread-message.html user="Michael" time="3:33pm" text="Confirmed. No throttling. This is above my pay grade." %}
{% include slack-thread-message.html user="Jesus" time="3:34pm" text="Just making sure everyone’s fed. 😇" %}

{% include slack-thread-end.html %}
```

This approach ensures consistency and reduces the need to write repetitive HTML.

---

## Example 2: Using Plain HTML

If you prefer to write the Slack thread manually, you can use the following structure:

```html
<div class="slack-log">
  <div class="slack-msg">
    <div class="slack-header">
      <span class="slack-user gabriel">Gabriel</span>
      <span class="slack-time">3:32pm</span>
    </div>
    <div class="slack-text">Did anyone check the quota limits?</div>
  </div>
  <div class="slack-msg">
    <div class="slack-header">
      <span class="slack-user michael">Michael</span>
      <span class="slack-time">3:33pm</span>
    </div>
    <div class="slack-text">Confirmed. No throttling. This is above my pay grade.</div>
  </div>
  <div class="slack-msg">
    <div class="slack-header">
      <span class="slack-user jesus">Jesus</span>
      <span class="slack-time">3:34pm</span>
    </div>
    <div class="slack-text">Just making sure everyone’s fed. 😇</div>
  </div>
</div>
```

This method gives you full control over the HTML but requires more effort to maintain consistency.

## Best Practices
- **Tone**: Keep the tone consistent with the post's theme (e.g., humorous, formal, critical).
- **Characterization**: Use distinct voices for each character to enhance immersion.
- **Length**: Keep threads concise and relevant to the main event.
- **Formatting**: Ensure proper nesting and indentation for readability.
- **User-Specific Classes**: For each user in a Slack thread, add their name as a class in the `_slack.scss` file and assign them a unique color. This helps visually distinguish messages from different users.
  - Example:
    ```scss
    .slack-user.gabriel {
      color: #3498db; /* Blue */
    }
    .slack-user.michael {
      color: #e74c3c; /* Red */
    }
    .slack-user.jesus {
      color: #2ecc71; /* Green */
    }
    ```

By following these guidelines, Slack threads can effectively enhance the narrative and humor of your posts.
